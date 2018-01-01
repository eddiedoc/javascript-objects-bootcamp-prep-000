var playlist = {
  maxwell: 'Pretty Wings',
  sting: 'Roxanne',
  "cindy lauper": 'Girls just wanna have fun'
};

function updatePlaylist(obj, artistName, songTitle) {
  return object.assign({}, obj, {[artistName]: songTitle})
}

