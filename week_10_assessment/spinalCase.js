function spinalCase(str) {
    str = str.split(/(?=[A-Z])/).join(" ");

    var regex = /_+|\s+|;+|-+/g; // you can add more matches before the last "-". You which to replace, to this regular expression

    str = str.replace(regex, '-');
    return str.toLowerCase();
  }
