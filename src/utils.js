// Export a function that returns the URL of an image in the assets folder
export const exportImageUrl = (path) => {
    return new URL('/assets/${path}', import.meta.url).href;
}


