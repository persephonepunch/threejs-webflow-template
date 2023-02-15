# threejs-webflow-template
Fork template
open github desktop on your local machine
open in Visual Code

run npm install
npm install any Libraries: GSAP, Three JS, Barba, Locomotive etc...

Add script and build preview.


Vite Webflow Barba GSAP and Three JS

Add to Global Code
<script src="https://barba-gsap-threejs.netlify.app/assets/js/main.js">
  
<script type="module" src="http://localhost:3000/@vite/client"></script>
<script type="module" src="http://localhost:3000/src/main.js"></script>  
  
  
</script>




Publish to Netlify and add location of source code for main.js

<script>
  (function () {
    const LOCALHOST_URL = [
      'http://localhost:3000/@vite/client',
      'http://localhost:3000/src/main.js',
    ]
    const PROD_URL = ['your_location_for/js/main.js']

    function createScripts(arr, isDevMode) {
      return arr.map(function (url) {
        const s = document.createElement('script')
        s.src = url

        if (isDevMode) {
          s.type = 'module'
        }

        return s
      })
    }

    function insertScript(scriptArr) {
      scriptArr.forEach(function (script) {
        document.body.appendChild(script)
      })
    }

    const localhostScripts = createScripts(LOCALHOST_URL, true)
    const prodScripts = createScripts(PROD_URL, false)

    let choosedScripts = null

    fetch(LOCALHOST_URL[0], {})
      .then(() => {
        choosedScripts = localhostScripts
      })
      .catch((e) => {
        choosedScripts = prodScripts
        console.error(e)
      })
      .finally(() => {
        if (choosedScripts) {
          insertScript(choosedScripts)

          return
        }

        console.error('something went wrong, no scripts loaded')
      })
  })()
</script>
