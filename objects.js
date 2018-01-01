var playlist = {
  maxwell: 'Pretty Wings',
  sting: 'Roxanne',
  "cindy lauper": 'Girls just wanna have fun'
};

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle});
}

function removeFromPlaylist(obj, artistName) {
 delete obj.artistName;
 return obj;
}