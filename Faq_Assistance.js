question("What can I do here?",
p=>{
    p.play({command:"gotoFaq",FaqId:1})
    p.play("This is the E-commerce Support's frequently asked questions. You can ask questions about creating an account, order payment options, checking the status of your order or return requests.")
})
question("How (can|do) I create an account?",
p=>{
    p.play({command:"gotoFaq",FaqId:2})
    p.play("You can create your account by entering and verifying your mobile number. Click on \"Create New Account\" after that and fill up the form to create your account.")
})
question("How can I pay for my order?",
p=>{
    p.play({command:"gotoFaq",FaqId:3})
    p.play("We support the following payment options:\n Cash On Delivery (available in selected pin codes), \nCredit Card, \nDebit Card, \nNet banking and \nGift Card.")
})
question("How can I check delivery to my PIN Code?",
p=>{
    p.play({command:"gotoFaq",FaqId:4})
    p.play("You can find out if we deliver to your PIN Code using the courier serviceability tool available on the product page.")
})
question("How do I check the status of my order?",
p=>{
    p.play({command:"gotoFaq",FaqId:5})
    p.play("Please tap on \"My Orders\" section under main menu of App or Website to check your order status.")
})
question("What is the Cancellation Policy?",
p=>{
    p.play({command:"gotoFaq",FaqId:6})
    p.play("You can cancel an order when it is in packed or shipped status, as long as the cancel option is available on App or Website.")
})
question("How do I cancel my Order?",
p=>{
    p.play({command:"gotoFaq",FaqId:7})
    p.play("Tap on \"My Orders\" section under the main menu of your App or Website and then select the item or order you want to cancel")
})
question("I just cancelled my order. When will I receive my refund?",
p=>{
    p.play({command:"gotoFaq",FaqId:8})
    p.play("For payments made via Credit Card, Debit Card, Net Banking, or Wallet you will receive refund into the source account within 7-10 days from the time of order cancellation.")
})
question("How do I create a Return Request?",
p=>{
    p.play({command:"gotoFaq",FaqId:9})
    p.play("You can create a Return in three simple steps.\n 1. Tap on My Orders. \n 2. Choose the item to be Returned. \n 3.Enter details requested and create a return request.")
})
question("How do I return multiple products from a single order?",
p=>{
    p.play({command:"gotoFaq",FaqId:10})
    p.play("If you are returning multiple products from a single order then, you will receive a separate Return ID via e-mail for each item. If you are self-shipping the products, you can ship all the products in a single shipment.")
})
question("How long would it take me to receive the refund of the returned product?",
p=>{
    p.play({command:"gotoFaq",FaqId:11})
    p.play("After the refund has been initiated as per the Returns Policy, the refund amount is expected to reflect in the customer account in 1-3 business days.")
})