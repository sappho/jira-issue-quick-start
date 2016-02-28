/*
    This code almost taken verbatim from Jared Farrish's comments at
    https://confluence.atlassian.com/display/JIRA/Creating+an+Issue.
    Jared's comments are taken as implied consent to open source use in this context.
    A further change was suggested in Robert Wolf's plugin review at
    https://marketplace.atlassian.com/plugins/uk.org.sappho.jira.plugin.jira-plugin-goto-new-issue/server/reviews.
 */

AJS.$(document).ready(function(){
    if (JIRA && JIRA.Forms) {
        JIRA.Forms.UnconfigurableCreateIssueForm = JIRA.Forms.UnconfigurableCreateIssueForm.extend({
            handleSubmitSuccess: function(issue) {
                if (this.helper.getCreateAnotherCheckbox().is(":checked")) {
                    this.helper.handleSubmitSuccess(issue);
                } else {
                    window.location = (contextPath.length > 0 ? contextPath : "") + "/browse/" + issue.issueKey;
                }
            }
        });
        JIRA.Forms.ConfigurableCreateIssueForm = JIRA.Forms.ConfigurableCreateIssueForm.extend({
            handleSubmitSuccess: function(issue) {
                if (this.helper.getCreateAnotherCheckbox().is(":checked")) {
                    this.helper.handleSubmitSuccess(issue);
                } else {
                    window.location = (contextPath.length > 0 ? contextPath : "") + "/browse/" + issue.issueKey;
                }
            }
        });
    }
});
