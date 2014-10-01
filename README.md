# Take a screenshot of an html widget and render it to an image


## Research
Tried:

https://github.com/niklasvh/html2canvas

Could not render images =-( ??


#  Installing Phatom:

Ubuntu
cd /usr/local/share
sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2
sudo tar xjf phantomjs-1.9.7-linux-x86_64.tar.bz2
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/share/phantomjs
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs
sudo ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/bin/phantomjs


/usr/bin/phantomjs  -v
# Run:


Run a simple python server:

python -m SimpleHTTPServer 8181

Take a lil screenshot:

phantomjs screenshot.js http://localhost:8181/ fileName2.png


phantomjs  -v

