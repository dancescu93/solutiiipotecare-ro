import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const adminEmail = process.env.ADMIN_EMAIL

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY lipsește din .env.local" },
        { status: 500 }
      )
    }

    if (!adminEmail) {
      return NextResponse.json(
        { error: "ADMIN_EMAIL lipsește din .env.local" },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
    const body = await request.json()

    const {
      fullName,
      phone,
      email,
      serviceType,
      referralSource,
      referralDetails,
      message,
    } = body

    await resend.emails.send({
      from: "Solutii Ipotecare <onboarding@resend.dev>",
      to: adminEmail,
      subject: `Lead nou: ${fullName}`,
      html: `
        <h2>Lead nou primit</h2>
        <p><strong>Nume:</strong> ${fullName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Serviciu:</strong> ${serviceType}</p>
        <p><strong>Sursă:</strong> ${referralSource || "-"}</p>
        <p><strong>Detalii sursă:</strong> ${referralDetails || "-"}</p>
        <p><strong>Mesaj:</strong> ${message || "-"}</p>
      `,
    })

    if (email) {
      await resend.emails.send({
        from: "Solutii Ipotecare <onboarding@resend.dev>",
        to: email,
        subject: "Am primit cererea ta",
        html: `
          <h2>Bună, ${fullName}!</h2>
          <p>Am primit cererea ta și revenim cât mai curând.</p>
          <p>Un consultant va analiza informațiile transmise și te va contacta pentru pașii următori.</p>
          <p>Cu drag,<br/>Echipa SolutiiIpotecare.ro</p>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Email notification error:", error)

    return NextResponse.json(
      { error: "Nu s-au putut trimite notificările." },
      { status: 500 }
    )
  }
}