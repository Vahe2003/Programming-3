module.exports = class Grass extends global.Characters //done
{
    constructor(x, y) 
    {
        super(x, y);
        this.multiply_bazmanal = 0;
    }

    stanalNorKordinatner() 
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }

    ChooseCell(ch) 
    {
        if(this.hivandutyun_mahacu == false)
        {
            this.stanalNorKordinatner();
            return super.ChooseCell(ch);
        }
    }

    bazmanal() //done
    {
        if(this.hivandutyun_mahacu == false && weather != 'winter')
        {
            this.multiply_bazmanal++;

            var datarkVandakner = this.ChooseCell(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var bazmanal_timeout = 0;

            if(weather == 'spring')
            {
                bazmanal_timeout = 3;
            }

            else if(weather == 'summer')
            {
                bazmanal_timeout = 1;
            }

            else if(weather == 'autumn')
            {
                bazmanal_timeout = 10;
            }

            if (norVandak && this.multiply_bazmanal >= bazmanal_timeout) 
            {
                this.multiply_bazmanal = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                
                matrix[nory][norx] = 1;
                
                var norXot = new Grass(norx, nory);
                grassArr.push(norXot);

                norXoter ++;
            }
        }
    }

    hivandutyun() //done
    {
        this.hivandutyun_timeout ++;

        var hivandutyun_repeat = 0;
        var numCount = 0;
        var randomNumCount = 0;

        if(weather == 'spring')
        {
            hivandutyun_repeat = 60;
            numCount = 2000;
            randomNumCount = 150;
        }

        else if(weather == 'summer')
        {
            hivandutyun_repeat = 80;
            numCount = 3000;
            randomNumCount = 100;
        }

        else if(weather == 'autumn')
        {
            hivandutyun_repeat = 40;
            numCount = 1500;
            randomNumCount = 250;
        }

        else if(weather == 'winter')
        {
            hivandutyun_repeat = 30;
            numCount = 1000;
            randomNumCount = 200;
        }
        
        var numArr = [];

        for(var a = 0; a < numCount; a++) //Numbers Array
        {
            var num = a;
            numArr.push(num);
        }

        if(this.hivandutyun_timeout >= hivandutyun_repeat)
        {
            this.hivandutyun_timeout = 0;

            var randomArr = [];
            var bool = false;

            for(var r = 0; r < randomNumCount; r++) //Random Numbers Array
            {
                var rand = Math.round(this.getRandomNum(numCount));
                randomArr.push(rand);
            }
            
            for(var i in randomArr) //Comparison of Arrays
            {
                var b = Math.round(this.getRandomNum(numCount));
                
                if(randomArr[i] == numArr[b])
                {
                    bool = true;
                }
            }
            
            if(bool == true)
            {
                hivandXoter ++;
                this.hivandutyun_mahacu = true;
                bool = false;
                this.mahanal();
            }
        }
    }

    mahanal() //done
    {
        if(this.hivandutyun_mahacu == true)
        {
            for(var i in grassArr)
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    grassArr.splice(i, 1)
                }
            }
        }

        else
        {
            for(var i in grassArr)
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    grassArr.splice(i, 1);
                }
            }
        }
    }
}