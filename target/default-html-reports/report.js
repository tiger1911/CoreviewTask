$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/coreview_search.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search CoreView and navigate to next page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the www.google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "com.coreview.step_definitions.Coreview_search_step_definitions.The_user_is_on_the_www_google_com()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "The user searches for \"CoreView\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.coreview.step_definitions.Coreview_search_step_definitions.the_user_searchs_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "The user scrolls to bottom of the page and clicks next",
  "keyword": "And "
});
formatter.match({
  "location": "com.coreview.step_definitions.Coreview_search_step_definitions.The_user_scrolls_to_bottom_of_the_page_and_clicks_next()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the second results and waits 5 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "com.coreview.step_definitions.Coreview_search_step_definitions.the_user_clicks_the_second_results_and_waits_seconds(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});