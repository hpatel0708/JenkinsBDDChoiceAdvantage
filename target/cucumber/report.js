$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/ChoiceAdvantageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate ChoiceAdvantage Login Page Functionality",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 3162437427,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the ChoiceAdvantage Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_ChoiceAdvantage_Login_Page()"
});
formatter.result({
  "duration": 301375830,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the userid as \"hpatel.txa01\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters the password as \"Goku2020\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hpatel.txa01",
      "offset": 27
    }
  ],
  "location": "StepDef.User_enters_the_userid(String)"
});
formatter.result({
  "duration": 86766484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goku2020",
      "offset": 29
    }
  ],
  "location": "StepDef.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 67143560,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 5934017120,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_Welcome_Page()"
});
formatter.result({
  "duration": 646455059,
  "status": "passed"
});
formatter.after({
  "duration": 160611688,
  "status": "passed"
});
formatter.before({
  "duration": 2154281641,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the ChoiceAdvantage Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_ChoiceAdvantage_Login_Page()"
});
formatter.result({
  "duration": 224900524,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should  be able to login with invalid credentials",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should--be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User enters the userid as \"hpatel1.txa01\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters the password as \"Goku2021\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hpatel1.txa01",
      "offset": 27
    }
  ],
  "location": "StepDef.User_enters_the_userid(String)"
});
formatter.result({
  "duration": 60543558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goku2021",
      "offset": 29
    }
  ],
  "location": "StepDef.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 56402145,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 5663517308,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_Welcome_Page()"
});
formatter.result({
  "duration": 477050072,
  "status": "passed"
});
formatter.after({
  "duration": 89772895,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User enters the \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 28,
      "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "hpatel.txa01",
        "Goku2020"
      ],
      "line": 29,
      "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "hpatel1.txa01",
        "Goku2021"
      ],
      "line": 30,
      "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2066682961,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the ChoiceAdvantage Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_ChoiceAdvantage_Login_Page()"
});
formatter.result({
  "duration": 254396714,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User enters the \"hpatel.txa01\" and \"Goku2020\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hpatel.txa01",
      "offset": 17
    },
    {
      "val": "Goku2020",
      "offset": 36
    }
  ],
  "location": "StepDef.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 10842655806,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_Welcome_Page()"
});
formatter.result({
  "duration": 555620408,
  "status": "passed"
});
formatter.after({
  "duration": 103594067,
  "status": "passed"
});
formatter.before({
  "duration": 2204799640,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the ChoiceAdvantage Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_ChoiceAdvantage_Login_Page()"
});
formatter.result({
  "duration": 252782378,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 23,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User enters the \"hpatel1.txa01\" and \"Goku2021\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hpatel1.txa01",
      "offset": 17
    },
    {
      "val": "Goku2021",
      "offset": 37
    }
  ],
  "location": "StepDef.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 10929939936,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_Welcome_Page()"
});
formatter.result({
  "duration": 471724551,
  "status": "passed"
});
formatter.after({
  "duration": 92194394,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "User should be able to login with valid credentials and able to find reservation",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-and-able-to-find-reservation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters the \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User clicks on find button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on reservation button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User fills up the form using \"\u003clastname\u003e\" and \"\u003cfirstname\u003e\" and \"\u003cstatus\u003e\" and \"\u003croomtype\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the search button to find reservation",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User should be able to see the list and validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-and-able-to-find-reservation;",
  "rows": [
    {
      "cells": [
        "userid",
        "password",
        "lastname",
        "firstname",
        "status",
        "roomtype"
      ],
      "line": 42,
      "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-and-able-to-find-reservation;;1"
    },
    {
      "cells": [
        "hpatel.txa01",
        "Goku2020",
        "Lyon",
        "Dwayne",
        "Checked Out",
        "SNK2"
      ],
      "line": 43,
      "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-and-able-to-find-reservation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2006422070,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the ChoiceAdvantage Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_ChoiceAdvantage_Login_Page()"
});
formatter.result({
  "duration": 238347085,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User should be able to login with valid credentials and able to find reservation",
  "description": "",
  "id": "validate-choiceadvantage-login-page-functionality;user-should-be-able-to-login-with-valid-credentials-and-able-to-find-reservation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    },
    {
      "line": 32,
      "name": "@Scenario4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User enters the \"hpatel.txa01\" and \"Goku2020\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User should be able to land on Welcome Page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User clicks on find button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on reservation button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User fills up the form using \"Lyon\" and \"Dwayne\" and \"Checked Out\" and \"SNK2\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the search button to find reservation",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User should be able to see the list and validate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hpatel.txa01",
      "offset": 17
    },
    {
      "val": "Goku2020",
      "offset": 36
    }
  ],
  "location": "StepDef.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 10899978961,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_land_on_Welcome_Page()"
});
formatter.result({
  "duration": 543872581,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_find_button()"
});
formatter.result({
  "duration": 70965471,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_reservation_button()"
});
formatter.result({
  "duration": 420112554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lyon",
      "offset": 30
    },
    {
      "val": "Dwayne",
      "offset": 41
    },
    {
      "val": "Checked Out",
      "offset": 54
    },
    {
      "val": "SNK2",
      "offset": 72
    }
  ],
  "location": "StepDef.user_fills_up_the_form_using_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 436009759,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_search_button_to_find_reservation()"
});
formatter.result({
  "duration": 746497171,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_see_the_list_and_validate()"
});
formatter.result({
  "duration": 436769091,
  "status": "passed"
});
formatter.after({
  "duration": 113666064,
  "status": "passed"
});
});