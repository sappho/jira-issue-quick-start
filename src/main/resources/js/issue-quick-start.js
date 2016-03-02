/*
    This code is a complete rewrite with considerable assistance from Alex Williams.
 */
AJS.$(document).on('DOMNodeInserted', function(event) {
    if (event.target.id == 'aui-flag-container') {
        console.log('issue-quick-start: Got post-it note!');
        AJS.$(event.target).on('DOMNodeInserted', function(event) {
            console.log('issue-quick-start: Post-it HTML: ' + event.target.innerHTML);
            var postItLink = AJS.$(event.target.innerHTML).find('a');
            var postItPath = postItLink.attr('href');
            if (postItPath && postItLink.attr('data-issue-key')) {
                console.log('issue-quick-start: Going to new issue path ' + postItPath);
                window.location = postItPath;
            }
        })
    }
});
