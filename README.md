This is a simple reproducible example for an Upwork posting.

Right now the component testCard.js has a button within a button, which is invalid HTML and is throwing a warning. I need this component to be reworked so that it no longer throws that warning, but with both buttons still working. That is, clicking buttonOne should cause actionOne to fire, and clicking buttonTwo should cause actionTwo to fire - but not actionOne.

Also, when creating this simple example, I accidentally introduced a hydration error that is causing certain elements to be duplicated at the end of the page. So far I am unable to figure out why this is happening, but I suspect that I have an unclosed div element somewhere, or something like that.
