// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const getUserMedia = require('wrtc').getUserMedia;
// getUserMedia({
//   audio: true,
//   video: true,
// })
//   .then((stream) => {
//     // console.log('getUserMedia stream:', stream)
//     // console.log('getUserMedia stream.getTracks():', stream.getTracks())
//     // let newStream = new MediaStream(stream.getTracks().map(track => track), peerConnection.getReceivers().map(receiver => receiver.track))
//     // console.log('getUserMedia newStream:', newStream)
//     // console.log('getUserMedia newStream.getTracks():', newStream.getTracks())
//     global.remoteStream = stream.addTrack(remoteStream.getTracks()[0]);
//     console.log('stream:', stream);
//     console.log('stream.getTracks():', stream.getTracks());
//   })
//   .catch((err) => {
//     console.log('err:', err);
//   });
