
const Fatorial = function (  F )
{
    if ( F === 0 )
	{
    	 return 1; 
   	}

  return F * factorial ( F - 1 );
 };
 
 factorial ( 5 ) ;