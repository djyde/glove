module.exports = {
  pick: function(baseName){
    window.baseName = window.baseName || {};
    return {
      get: function(key){
        return window.baseName[key];
      },
      set: function(key, value){
        window.baseName[key] = value;
      },
      inc: function(key, num){
        window.baseName[key] = parseInt(window.baseName[key]) + num;
      },
      dec: function(key, num){
        window.baseName[key] = parseInt(window.baseName[key]) - num;
      },
      $set: function(key, value){
        localStorage.setItem(baseName + '_' + key, JSON.stringify(value));
      },
      $get: function(key){
        if (localStorage.getItem(baseName + '_' + key)) {
          return JSON.parse(localStorage.getItem(baseName + '_' + key));
        } else {
          return '';
        }
      }
    }
  }
}