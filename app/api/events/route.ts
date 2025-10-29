import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let event;

    try {
      const rawEventData = Object.fromEntries(formData.entries());

      event = {
        ...rawEventData,
        agenda: formData.getAll("agenda"),
        tags: formData.getAll("tags"),
      };
    } catch (e) {
      return NextResponse.json(
        { message: "Invalid form data format" },
        { status: 400 }
      );
    }

    const createdEvent = await Event.create({
      ...event,
    });

    return NextResponse.json(
      { message: "Event created successfully", event: createdEvent },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 }
    );
  }
}
