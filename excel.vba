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

