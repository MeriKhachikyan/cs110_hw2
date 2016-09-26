const spaceN = function(T) {
if(T === 0)
{
	return "";
}
 return " " + spaceN(T - 1);
};

 const starN = function(P)
 {
if(P === 0) 
{
 return "";
}
 return "*" + starN(P - 1);
};

const main = function(T, P, q)
 {
  if(q === 0) 
{
  return "";
}
  console.log(spaceN(T) + starN(P));
  main(T-1, P + 2, q-1);
};

 const triangleStar = function(q) {
	main(q-1, 1, q);
};

  triangleStar(4);