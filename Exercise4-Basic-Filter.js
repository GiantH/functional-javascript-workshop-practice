function getShortMessages(messageObjs) {
  return messageObjs.filter(messageObj => messageObj.message.length < 50)
    .map(messageObj => messageObj.message);
}

module.exports = getShortMessages;