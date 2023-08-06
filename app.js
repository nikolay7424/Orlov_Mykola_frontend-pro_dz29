function Student(fName, lName, birthDate) {
    this.grades = []
    this.attendance = []
    this.attendance.length = 25
    this.attendanceDay = 0
    this.birthDate = new Date(birthDate)
    this.fName = fName
    this.lName = lName
}

Student.prototype.getAge = function () {
    const day = this.birthDate.getDate()
    const month = this.birthDate.getMonth()
    const year = this.birthDate.getFullYear()
    const today = new Date()

    if (today.getMonth() > month) {
        return today.getFullYear() - year
    } else if (month === today.getMonth() && today.getDate() > day) {
        return today.getFullYear() - year
    } else {
        return today.getFullYear() - year - 1
    }
}

Student.prototype.present = function () {
    if (this.attendanceDay < this.attendance.length) {
        this.attendance[this.attendanceDay] = true
        this.attendanceDay++
    } else {
        console.log(`${this.attendance.length} days are over!`)
    }
}

Student.prototype.absent = function () {
    if (this.attendanceDay < this.attendance.length) {
        this.attendance[this.attendanceDay] = false
        this.attendanceDay++
    } else {
        console.log(`${this.attendance.length} days are over!`)
    }
}

Student.prototype.getAvgGrade = function () {
    if (this.grades.length > 0) {
        return Math.round(
            this.grades.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            ) / this.grades.length
        )
    } else {
        return 0
    }
}

Student.prototype.summary = function () {
    let attendanceCount = 0
    this.attendance.forEach((attend) => {
        if (attend) {
            attendanceCount++
        }
        return attendanceCount
    })
    const avgAttendance = attendanceCount / this.attendance.length
    const avgGrade = this.getAvgGrade()
    if (avgAttendance > 0.9 && avgGrade > 90) {
        return "Молодець"
    } else if (avgAttendance < 0.9 && avgGrade < 90) {
        return "Редиска!"
    } else {
        return "Добре, але можна краще"
    }
}

const varySmartDavid = new Student("David", "Smart", "02.12.1986")

for (let i = 0; i < 25; i++) {
    varySmartDavid.present()
    varySmartDavid.grades.push(Math.floor(Math.random() * (100 - 90) + 90))
}

console.log(varySmartDavid.fName + " " + varySmartDavid.lName)
console.log(varySmartDavid.getAge())
console.log(varySmartDavid.getAvgGrade())
console.log(varySmartDavid.summary())

console.log("====================")

const veryAverageJohn = new Student("John", "Average", "12.02.1993")

for (let i = 0; i < 25; i++) {
    veryAverageJohn.present()
    veryAverageJohn.grades.push(Math.floor(Math.random() * 101))
}

console.log(veryAverageJohn.fName + " " + veryAverageJohn.lName)
console.log(veryAverageJohn.getAge())
console.log(veryAverageJohn.getAvgGrade())
console.log(veryAverageJohn.summary())

console.log("====================")

const varyLameBryan = new Student("Bryan", "Lame", "04.07.1984")

for (let i = 0; i < 25; i++) {
    varyLameBryan.absent()
    varyLameBryan.grades.push(Math.floor(Math.random() * (50 - 20) + 20))
}

console.log(varyLameBryan.fName + " " + varyLameBryan.lName)
console.log(varyLameBryan.getAge())
console.log(varyLameBryan.getAvgGrade())
console.log(varyLameBryan.summary())
varyLameBryan.present()
