// pages/api/send.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { email, subject, message } = body;

  // Here you can add your email sending logic
  // For now, just returning the received data

  return NextResponse.json({ email, subject, message, status: 'Message received' });
}
