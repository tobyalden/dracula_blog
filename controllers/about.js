Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {

    showRealName: function() {
      alert("the count counts counts counts ");
    },

    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }

  }
});
