function CommentList() {
  this.commentsArray = []
}

CommentList.prototype.render = function() {
  // should return the value of the render method of all it's comments
};

CommentList.prototype.addComment = function(string) {
  var newComment = new Comment(string)
  this.commentsArray.push(newComment)
}
