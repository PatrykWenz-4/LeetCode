class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {result}
     */
    add(value){
        this.result += value;
        return this;

    }
    
    /** 
     * @param {number} value
     * @return {result}
     */
    subtract(value){
        this.result = this.result - value;
        return this;

    }
    
    /** 
     * @param {number} value
     * @return {result}
     */  
    multiply(value) {
        this.result =  this.result * value;
        return this;

    }
    
    /** 
     * @param {number} value
     * @return {result}
     */
    divide(value) {
     if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;


    }
    
    /** 
     * @param {number} value
     * @return {result}
     */
    power(value) {
    this.result = Math.pow(this.result, value);
            return this;


    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}