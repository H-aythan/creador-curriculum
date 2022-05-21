import React from "react";

const Cv1 =({form,Text,View,StyleSheet,web})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
  const styles = StyleSheet.create({
    page:{height:"100%",color:"black",padding:"15px 0px 15px",flexDirection:"column",alignItems:"center",display:"flex"
      
    },
    sectionNames:{width:"90%",height:"18%",lineHeight:"1",textAlign:"justify",
      fontSize:"20px",display:"flex",paddingTop:"12px",marginBottom:"10px",flexWrap:"wrap",
    },
    image:{border:"2px solid black",width:"100px",height:"100px",padding:"15px",fontSize:"10px",textAlign:"center",marginRight:"10px"},
    names:{overflow:"hidden",width:"70%",flexWrap:"wrap",
      height:"120px",margin:"10px",
    },
    sectionData:{width:"90%",flexGrow:"10",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"},
    aside:{flexBasis:"20%",textAlign:"left",display:"flex",flexDirection:"column",},
    sectionInfo:{flexBasis:"70%",textAlign:"left",display:"flex",flexDirection:"column"},
    SectionsGenerics:{display:"flex",flexDirection:"column",overflow:"hidden",width:"100%",
      marginTop:"10px",
    }
    
  });
  
  return( 
    
<View style={styles.page}>
        <View style={styles.sectionNames}>
        {/* firstname lastName photo occupation*/}
          <Text style={styles.image}>photo</Text>
          <View style={styles.names}>
            <View style={{width:"100%",flexDirection:"row",flexWrap:"wrap"}}>
              <Text style={{marginRight:"5px",fontSize:web?"20px":"25px"}}>{firstName}</Text>
              <Text style={{float:"left",fontSize:web?"20px":"25px"}}>{lastName}</Text>
            </View>
            <Text style={{float:"left",width:"100%",fontSize:web?"17px":"22px",opacity:"0.7",marginTop:"5px"}}>{occupation}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.sectionData}>
          {/* adrees phone email */}
          <View style={styles.aside}>
            <Text style={{borderBottom:"4px solid black",paddingBottom:"5px",width:web?"35px":"45px",fontSize:web?"18px":"25px"}}>Info</Text>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:web?"10px":"13px"}}>Adress</Text>
              <Text style={{fontSize:web?"7px":"10px",opacity:"0.8"}}>{address}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:web?"10px":"13px"}}>Phone</Text>
              <Text style={{fontSize:web?"7px":"10px",opacity:"0.8"}}>{phone}</Text>
            </View>
            <View style={styles.SectionsGenerics}>
              <Text style={{fontSize:web?"10px":"13px"}}>Email</Text>
              <Text style={{fontSize:web?"7px":"10px",opacity:"0.8"}}>{email}</Text>
            </View>
            {/* language skills */}
            <Text style={{fontSize:"14px",marginTop:"10px",borderBottom:"4px solid black",paddingBottom:"5px",width:"70px"}}>Languages</Text>
            <View style={{width:"100%"}}>
              {languages.map(item=>{
                return<View style={{justifyContent:"space-between",marginTop:"5px",marginBottom:"5px" ,flexDirection:"row",opacity:"0.8"}}>
                  <Text style={{fontSize:web?"9px":"10px"}}>{item.language}</Text>
                  <Text style={{fontSize:web?"9px":"10px"}}>{item.rating}</Text>  
                </View>
              })}
            </View>
            <Text style={{fontSize:"14px",borderBottom:"4px solid black",paddingBottom:"5px",width:"32px"}}>Skills</Text>
            <View style={{width:"100%"}}>
              {skills.map(item=>{
                 let array=[] 
                 for (let index = 0; index < parseInt(item.rating)/10; index++) {
                   array.push(index)
                }
                return<View style={{justifyContent:"space-between",flexDirection:"column",marginTop:"5px",marginBottom:"5px",opacity:"0.8"} }>
                  <Text style={{fontSize:web?"9px":"10px"}}>{item.skill}</Text> 
                  <View style={{border:"2px solid black",height:"15px",flexDirection:"row",padding:"2px"}}>
                    {array.map(()=>{
                      return <View style={{backgroundColor:"black", width:"10%",marginLeft:"0.5px",marginRight:"0.5px"}}></View>
                    })}
                  </View> 
                
                </View>
              })}
            </View>
          </View>
          {/* employment education prfesionalSuumary*/}
          <View style={styles.sectionInfo}>
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px"}}>Professional Summary</Text>
            <Text style={{fontSize:"12px",margin:"10px 0px 10px",opacity:"0.7"}}>{professionalSummary}</Text>
            
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px",marginTop:"10px"}}>Employment History</Text>
            {employmentHistory.map(item=>{
              return <View style={{flexDirection:"column",marginTop:"10px"}}>
                  <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                    <Text style={{fontSize:web?"8px":"10px"}}>{item.jobTitle}, {item.employer}</Text>
                    <Text style={{marginRight:"10px",fontSize:web?"9px":"10px"}}>{item.begin}-{item.end}</Text>
                  </View>
                  <Text style={{fontSize:"9px",lineHeight:"1",opacity:"0.7",marginTop:"5px"}}>
                    {item.description}
                  </Text>
              </View>
              })}
            <Text style={{fontSize:"18px",borderBottom:"4px solid black",paddingBottom:"5px",marginTop:"10px"}}>Education History</Text>
            {educations.map(item=>{
              return <View style={{flexDirection:"column",marginTop:"10px"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text  style={{fontSize:web?"8px":"10px"}}>{item.school}, {item.degree}</Text>
                    <Text style={{marginRight:"10px",fontSize:web?"9px":"10px"}}>{item.start}-{item.finish}</Text>
                  </View>
                  <Text style={{fontSize:"9px",lineHeight:"1",opacity:"0.7",marginTop:"5px"}}>
                    {item.description}
                  </Text>
              </View>
              })}
          </View>

        </View>
    </View>
      
  )}
 
export default Cv1;
