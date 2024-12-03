# הוראות להפעלת הפרויקט

## שלבים להפעלה

1. **התקנת Node.js**
   - יש להתקין את Node.js במחשב שלכם. ניתן להוריד את ההתקנה מהקישור הבא: [Node.js Download](https://nodejs.org/).

2. **הרצת סקריפט ההתקנה**
   - לאחר שהתקנתם את Node.js, יש להריץ את הקובץ `script.bat` שמצורף לפרויקט.

3. **בדיקת התקנה**
   - ניתן לבדוק שהפרויקט מותקן באמצעות לחיצה על הקישור הבא:
     [בדוק התקנה](http://localhost:3000/test)

4. **הוספת מאקרו באקסל**
   - הוסיפו את התוכן הבא למאקרו באקסל:
     ```vba
     
Sub CallAPIForRow()
    Dim currentRow As Integer
    Dim userCode As String, password As String, bank As String
    Dim url As String
    Dim http As Object
    Dim response As String

    On Error GoTo ErrorHandler 

    currentRow = ActiveCell.Row

    userCode = Cells(currentRow, 3).Value 
    password = Cells(currentRow, 4).Value
    bank = Cells(currentRow, 2).Value
    zheut = Cells(currentRow, 5).Value

    url = "http://localhost:3000/open-bank?userCode=" & userCode & "&password=" & password & "&bank=" & bank & "&zheut=" & zheut


    Set http = CreateObject("MSXML2.ServerXMLHTTP")

    http.Open "GET", url, False
    http.Send

    Exit Sub

ErrorHandler:
    MsgBox "Error", vbCritical
End Sub
     
     ```
   - לאחר מכן, הוסיפו לחצן בגליון האקסל שלכם ושייכו אליו את המאקרו `CallAPIForRow`.


## בהצלחה!

