//callback
function doSomething(callback)
{
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback)
{
    setTimeout(function() {
        //did other thing
        callback('Secund data');
    }, 1000);
}

function doAll()
{
    try
    {
        doSomething(function(data) {
            var processeData = data.split('');
    
            try
            {
                doOtherThing(function(data2) {
                    var processeData2 = data2.split('');
                    
                    try
                    {
                        setTimeout(function() {
                            console.log(processeData, processeData2);
                        }, 1000);
                    }
                    catch (error)
                    {
                        //Handle error
                    }

                });
            }
            catch (error)
            {
            
                //Handle error

            }

        });
    }
    catch (error)
    {
        //Handle error
    }

}

doAll();

