var playlist = {
  maxwell: 'Pretty Wings',
  sting: 'Roxanne',
  "cindy lauper": 'Girls just wanna have fun'
};

function updatePlaylist(obj, artist, song) {
  return object.assign({}, obj, {[artist]: song})
}

