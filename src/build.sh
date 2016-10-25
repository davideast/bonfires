# Copy index.html
cp ./index.html ../public/
# Uncss
#uncss -s ./css/animate.css ./index.html > ./css/animated.stripped.css
#uncss -s ./css/styles.css ./index.html > ./css/styles.stripped.css
#uncss -s ./node_modules/material-design-lite/dist/material.blue-orange.min.css ./index.html > ./css/material.blue-orange.stripped.css
# Combine css & copy
cat ./css/styles.stripped.css ./css/material.blue-orange.stripped.css ./css/animated.stripped.css > ../public/css/stripped.css
# Copy ServiceWorker
cp ./js/sw.js ../public/sw.js
# Copy vendor files
cp ./node_modules/firebase/firebase.js ../public/vendor/firebase.js
cp ./node_modules/handlebars/dist/handlebars.runtime.min.js ../public/vendor/handlebars.runtime.min.js
# Compile TypeScript, which copies JavaScript
tsc
# Compile Handlebars
handlebars ./templates/events.handlebars -f ../public/js/events.template.js
# Copy images
cp -r ./images ../public/images