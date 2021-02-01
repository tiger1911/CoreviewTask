package com.coreview.step_definitions;

import com.coreview.utilities.BrowserUtils;
import com.coreview.utilities.ConfigurationReader;
import com.coreview.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class GoogleSearchStepDefinitions {

    @Given("The user is on the www.google.com")
    public void The_user_is_on_the_www_google_com() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @Given("The user searches for {string}")
    public void the_user_searches_for(String word) {

        WebElement iframe = Driver.get().findElement(By.xpath("//*[@id=\"cnsw\"]/iframe"));
        Driver.get().switchTo().frame(iframe);
        WebElement acceptButton = Driver.get().findElement(By.xpath("(//span[@class='CwaK9'])[3]"));
        acceptButton.click();
        Driver.get().switchTo().parentFrame();
        WebElement searchBox = Driver.get().findElement(By.xpath("//input[@name='q']"));
        searchBox.click();
        searchBox.sendKeys(word + Keys.ENTER);
    }

    @Given("The user scrolls to bottom of the page and clicks next")
    public void The_user_scrolls_to_bottom_of_the_page_and_clicks_next() {

        WebElement nextButton = Driver.get().findElement(By.xpath("//span[@style='display:block;margin-left:53px']"));
        BrowserUtils.clickWithJS(nextButton);
    }


    @When("The user clicks the second result and waits {int} seconds")
    public void The_user_clicks_the_second_result_and_waits_seconds(Integer time) {

        WebElement secondResult = Driver.get().findElement(By.xpath("(//a/h3[1])[2]"));
        secondResult.click();
        BrowserUtils.waitFor(time);
    }



}
