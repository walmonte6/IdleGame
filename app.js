window.onload = function(e){

    new Vue ({
        template: `<div id="app">
            <h1>Morgan's Theater Life: Revenge of Mortilda</h1>

            <h3>Days survived: {{day}}</h3>

            <table>

            <tr class="currency">
                <td>Energy: </td>
                <td>{{energy}}</td>
            </tr>

            <tr class="currency">
                <td>Social Life: </td>
                <td>{{social}}</td>
            </tr>

            <tr class="currency">
                <td>Grades: </td>
                <td>{{grades}}</td>
            </tr>

            <tr class="currency">
                <td>Stress Levels: </td>
                <td>{{stress}}</td>
            </tr>

            </table>

            <div>
                <button @click="goToSleep":disabled="energy >= 100">Sleep</button>
                <button @click="goToClass":disabled="energy < 10">Go to class</button>
                <button @click="Mortilda" v-if="stressLevels < 75 && gradesLevel >= 75">Act in Matilda: Musical</button>
            </div>

            <div id="eventLog">
                <div v-for="event in eventsToDisplay">
                    {{event}}
                </div>
            </div>
        </div>`,

        computed: {
            eventsToDisplay()
            {
                return this.events.slice().reverse()
            },
            stressLevels()
            {
                return this.stress
            },
            gradesLevel()
            {
                return this.grades
            }
        },

        methods: {
            goToSleep()
            {
                const output = "Morgan went to sleep"


                let energyGained = 20
                let socialLevels = -10
                let gradesChange = -10
                let stressLevels = -5

                if (this.energy < 100)
                {
                console.log(output)
                this.events.push(output)
                this.energy = Math.min(100, this.energy + energyGained)
                this.social += socialLevels
                this.grades += gradesChange
                this.stress = Math.min(100, this.stress + stressLevels)
                }
                else{
                    console.log("you cant possibly sleep more")
                }
            },

            goToClass()
            {
                const output = "morgan went to class (surprise!)"

                let energyGained = Math.floor( -40*Math.random())
                let socialLevels = 10
                let gradesChange = 20
                let stressLevels = Math.floor( -20*Math.random())
                
                if (this.energy > 20)
                {
                console.log(output)
                this.events.push(output)
                this.energy = Math.max(0, this.energy + energyGained)
                this.social += socialLevels
                this.grades += gradesChange
                this.stress = Math.max(0, this.stress + stressLevels)
                }
                else{
                    console.log("You're too tired for skool")
                }
            },

            Mortilda()
            {
                const output = "Achievement: Congratulations! Morgan acted in matilda (as matilda)"

                console.log(output)
                this.events.push(output)

                let energyGained = -40
                let socialLevels = 45 
                let gradesChange = -5
                let stressLevels = 35

                this.energy = Math.max(0, this.energy + energyGained)
                this.social += socialLevels
                this.grades += gradesChange
                this.stress = Math.max(0, this.stress + stressLevels)
            },

            goodDay()
            {
                const output = "Morgan had a good day!"
                console.log(output)
                this.events.push(output)

                let energyGained = 10
                let stressLevels = -10
                let socialLevels = 15 
                let gradesChange = 10

                this.energy = Math.min(100, this.energy + energyGained)
                this.social += socialLevels
                this.grades += gradesChange
                this.stress = Math.max(0, this.stress + stressLevels)
            },

            noTimeForDinner()
            {
                const output = "Dang! Morgan forgot to eat dinner before Matilda rehersal"
                console.log(output)
                this.events.push(output)

                let energyGained = -25
                let stressLevels = 10

                this.energy = Math.max (0, energyGained + this.energy)
                this.stress = Math.min(100, this.stress +  stressLevels)
            },

            boyfriendsHouse()
            {
                const output = "Morgan slept at her boyfriends house! So much rest!"
                console.log(output)
                this.events.push(output)

                let energyGained = 50
                let stressLevels = -50

                this.energy = Math.min (100, energyGained + this.energy)
                this.stress = Math.max(0, this.stress +  stressLevels)
            },



        },

        mounted()
        {
            console.log("START (step function)")

            setInterval(() =>{
                console.log("step")
                this.day++
                this.stress += 1


                let chance = Math.random()

                if (chance < .1)
                {
                    this.goodDay()
                }
                else if (chance < .2)
                {
                    this.noTimeForDinner()
                }
                else if (chance < .25)
                {
                    this.boyfriendsHouse()
                }
            }, 1000)
        },

        data() {
            return {
                day: 0,
                energy: 50,
                social: 50,
                grades: 50,
                stress: 15,

                events: ["Morgan's first day of class"]
            }
        },

        el: "#app",

    })

}