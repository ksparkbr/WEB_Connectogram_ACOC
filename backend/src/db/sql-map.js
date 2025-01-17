/**
 * SQL 쿼리문을 따로따로 관리해주고 싶어서 굳이 번거롭게 만들어놓음 (MyBatis의 SQLMAP 과 비슷한 기능)
 * @author 중사 박길선
 * @since 2022.09.23
 */
const insertTbUser = require("./querystore/insert-tb-user");
const insertTbUserAppl = require("./querystore/insert-tb-user-appl");
const selectTbUser = require("./querystore/select-tb-user");
const selectTbUserAppl = require("./querystore/select-tb-user-appl");
const selectTestTable = require("./querystore/select-test-table");  // 여기에 진짜 쿼리문이 들어간다.
const updateTbUserAppl = require("./querystore/update-tb-user-appl");

module.exports = {
    //업무 단위별로 또 쪼개어 넣는다 (아래는 'test' 업무단위에 들어가는 쿼리들)
    test : {
        selectTestTable : (param) => selectTestTable(param),
    },
    user : {
        insertTbUserAppl : (param) => insertTbUserAppl(param),
        updateTbUserAppl : (param) => updateTbUserAppl(param),
        selectTbUserAppl : (param) => selectTbUserAppl(param),
        insertTbUser : (param) => insertTbUser(param),
    },
    session : {
        selectTbUser : (param) => selectTbUser(param),
    }

}