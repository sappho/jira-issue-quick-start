package ut.org.uk.sappho.plugins.jira.quickstart;

import org.junit.Test;
import org.uk.sappho.plugins.jira.quickstart.api.MyPluginComponent;
import org.uk.sappho.plugins.jira.quickstart.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}