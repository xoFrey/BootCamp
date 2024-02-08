let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

console.table(album);

const myAlbum = album.map((items) => {
  let newitem = items.toLowerCase();
  if (newitem.includes(".")) {
    return newitem.slice(0, newitem.indexOf("."));
  } else {
    return (newitem = "invalid");
  }
});

console.table(myAlbum);
