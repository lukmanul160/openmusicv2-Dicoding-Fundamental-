const { Pool } = require("pg");

class ExportService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(owner) {
    const queryCollab = {
      text: `SELECT playlist_id from collaborations where user_id = $1`,
      values: [owner],
    };
    const temp = await this._pool.query(queryCollab);

    let playlistId = "";
    if (temp.rows.length) {
      const result = temp.rows[0].playlist_id;
      playlistId = result;
    }
    const query = {
      text: `SELECT playlists.id, playlists.name, users.username FROM playlists
      LEFT JOIN users ON users.id = playlists.owner
      WHERE owner = $1 or playlists.id = $2`,
      values: [owner, playlistId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = ExportService;
