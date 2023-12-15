8. As I input numbers, I should be able to see my input in the element with the id of "display"

Numbers do not display correctly within id="display" : expected '0' to equal '123'



9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit "=", the correct result should be shown in the element with the id of "display"

The expression 3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5 as an
          answer, depending on the logic your calculator uses
          (formula vs. immediate execution) 



          11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted

An input of "5 . . 0" should display 5.0 : expected '0' to equal '5.0'


12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points

The expression "10.5 - 5.5" should produce an output of "5" : expected '0' to equal '5'


13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.

The sequence "5 * - 5" = should produce an output of "-25" : expected '0' to equal '-25'



14. Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation

The sequence "5 - 2 = / 2 =" should produce an output of "1.5" : expected '0' to equal '1.5'


15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like "2 / 7" with reasonable precision to at least 4 decimal places)

The expression "2 / 7" should produce an output number with at least 4 decimal places of precision : expected false to be truthy
