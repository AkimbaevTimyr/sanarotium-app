export function getImageUrl(path, name) {
    return new URL(`${path}/${name}`, import.meta.url).href
}

export const galleryImages = [
    {
        src: "city.jpeg"
    },
    {
        src: "people.jpeg"
    },
    {
        src: "room.jpeg"
    },
    {
        src: "president.jpeg"
    },
    {
        src: "materials.png"
    },
    {
        src: "two-person-standart.jpeg"
    },
]