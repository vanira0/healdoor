import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would validate the body again and 
    // save this data to a database or send it to a CRM.
    // We are mocking a successful response here.
    
    console.log("Received new enquiry:", body);
    
    // Mock successful save
    return NextResponse.json({ success: true, message: "Enquiry received successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json({ success: false, message: "Failed to process enquiry" }, { status: 500 });
  }
}
