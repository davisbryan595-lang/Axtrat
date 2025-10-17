import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Integrate with email service or database
    console.log("Contact message received:", body)

    return NextResponse.json({ message: "Message sent successfully", data: body }, { status: 200 })
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
