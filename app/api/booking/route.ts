import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service || !body.date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Integrate with email service or database
    console.log("Booking received:", body)

    return NextResponse.json({ message: "Booking submitted successfully", data: body }, { status: 200 })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}
