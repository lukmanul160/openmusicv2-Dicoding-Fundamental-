/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn("albums", {
    coverUrl: {
      type: "TEXT",
    },
  });

  pgm.addConstraint(
    "songs",
    "fk_songs.album_id_albums.id",
    "FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE RESTRICT"
  );
};

exports.down = (pgm) => {
  pgm.dropColumn("albums", "coverUrl");
};
