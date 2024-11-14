import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fileName = url.searchParams.get('file')?.trim();

  if (!fileName?.endsWith('.md')) {
    return NextResponse.json({ error: 'Invalid file name' }, { status: 400 });
  }

  try {
    // read Markdown file and return content
    const filePath = path.join(process.cwd(), 'public/_posts/', fileName);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return NextResponse.json({ content: fileContent });
  } catch (_) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
