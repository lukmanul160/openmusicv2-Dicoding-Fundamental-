const mapDBToModelAlbum = ({ id, name, year }) => ({
  id,
  name,
  year,
});

const mapDBToModelSong = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});

module.exports = { mapDBToModelAlbum, mapDBToModelSong };
