/**
 * Estimates reading time for a given body of text.
 * Assumes an average reading speed of 200 words per minute.
 */
export function getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    // Strip markdown syntax before counting words
    const plainText = content
        .replace(/```[\s\S]*?```/g, '') // remove code blocks
        .replace(/`[^`]*`/g, '')         // remove inline code
        .replace(/#{1,6}\s/g, '')        // remove headings
        .replace(/[*_~`>]/g, '')         // remove emphasis markers
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // unwrap links
        .replace(/!\[[^\]]*\]\([^)]+\)/g, '')     // remove images
        .trim();

    const words = plainText.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
    return `${minutes} min read`;
}
