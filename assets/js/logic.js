function boltCreator(n, tagname) {
  for (var i = 0; i < n; i++) {
    var bolt = document.createElement('div');
    // for now the following if else is for adjusting the margin on bolts
    var digit = parseInt(tagname[tagname.length - 1])
    if (digit == 0 || digit % 2 == 0) {
      bolt.className = "bolt";
    } else {
      bolt.className = "btm-bolt";
    }
    var parent = document.getElementById(tagname);
    parent.appendChild(bolt);
  }
}

function createBoltSets() {
  var bCount = [2, 5, 7]
  var n = 6
  var set = 0
  for (var i = 0; i < n; i++) {
    var idName = 'boltset' + i
    boltCreator(bCount[set], idName)
    if (i != 0 && i % 2 != 0) {
      set++;
    }
  }
}
createBoltSets();

function turnItOn() {
  document.getElementById('start-btn').classList.add('light-on');
  document.getElementById('neon-sign').classList.add('neon-on');
  document.getElementById('neon-sign1').classList.add('neon-on');
}

function reset() {
  document.getElementById('start-btn').classList.remove('light-on');
  document.getElementById('neon-sign').classList.remove('neon-on');
  document.getElementById('neon-sign1').classList.remove('neon-on');
}

function setWindow(n) {
  var template = `
    <div id="abt-me" class="carousel-item active flex-row">
            <img src="assets/images/IMG_9381-2.jpg" alt="photo of Weston Dockstader" style="height:300px;width:auto;" class="mx-auto">
            <p>I was born and raised in Boise Idaho. Served three years in the Army on active duty, returned to Idaho earned
              a B.S. in Computer Science from the College of Idaho, Then expanded my professional education by attending
              Boise Codeworks immersive program in fullstack Web Development.</p>
          </div>`;
  if (n == 1) {
    template = `
      <div id="projectCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" target="_blank">
            <a href="https://mytunes-vue.herokuapp.com">
              <img class="img-style" src="/assets/images/findTunes.jpg" alt="Screenshot of my Music Search project">
            </a>
            <h4>Vue Music</h4>
            <p>This program uses the iTunes api to search for music and allows for songs to be saved to playlists. It is written using Vue and Node</p>
          </div>
          <a class="carousel-control-previous" href="#projectCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>`;
  }
  else if (n == 2) {
    template = `
    <div class="row">
    <div class="col offset-2 d-flex justify-content-around flex-wrap iconform">
      <i class="devicon-html5-plain-wordmark colored dev-cons"></i>
      <i class="devicon-css3-plain-wordmark colored dev-cons"></i>
      <i class="devicon-javascript-plain colored dev-cons"></i>
      <i class="devicon-bootstrap-plain-wordmark colored dev-cons"></i>
      <i class="devicon-nodejs-plain-wordmark colored dev-cons"></i>
      <i class="devicon-vuejs-plain-wordmark colored dev-cons"></i>
      <i class="devicon-mysql-plain-wordmark colored dev-cons"></i>
      <i class="devicon-csharp-line-wordmark colored dev-cons"></i>
      <!-- <i class="devicon-python-plain-wordmark colored dev-cons"></i> -->
    </div>`;
  }
  document.getElementById('content-window').innerHTML = template;
}
setWindow(0);