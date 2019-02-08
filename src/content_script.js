walk(document.body);

function walk(node) 
{
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;
  
  if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }

  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) 
{
  var v = textNode.nodeValue;

  v = v.replace(/\bBlockchain\b/g, "Wombo Combo");
  v = v.replace(/\bblockchain\b/g, "wombo combo");

  v = v.replace(/\bBlock chain\b/g, "Wombo Combo");
  v = v.replace(/\bblock chain\b/g, "wombo combo");

  v = v.replace(/\bBlockchains\b/g, "Wombo Combos");
  v = v.replace(/\bblockchains\b/g, "wombo combos");
 
  v = v.replace(/\bBITCOIN\b/g, "SANIC");
  v = v.replace(/\bBitcoin\b/g, "Sanic");
  v = v.replace(/\bbitcoin\b/g, "Sanic");

  v = v.replace(/\bBitcoin's\b/g, "Sanic's");
  v = v.replace(/\bbitcoin's\b/g, "Sanic's");

  v = v.replace(/\bBitcoins\b/g, "Sanics");
  v = v.replace(/\bbitcoins\b/g, "Sanics");

  v = v.replace(/\bETHEREUM\b/g, "DANKEY KANG");
  v = v.replace(/\bEthereum\b/g, "Dankey Kang");
  v = v.replace(/\bethereum\b/g, "Dankey Kang");

  v = v.replace(/\bEthereum's\b/g, "Dankey Kang's");
  v = v.replace(/\bethereum's\b/g, "Dankey Kang's");

  v = v.replace(/\bEthereums\b/g, "Dankey Kangs");
  v = v.replace(/\bethereums\b/g, "Dankey Kangs");

  textNode.nodeValue = v;
}


