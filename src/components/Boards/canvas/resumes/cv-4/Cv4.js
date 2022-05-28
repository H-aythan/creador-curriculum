import React, { Component } from "react";
const Cv4=({form,Text,View,StyleSheet,web})=>{
  const {firstName,lastName,address,phone,email,languages,
    skills,professionalSummary,employmentHistory,educations,occupation}=form;
  
  const styles = StyleSheet.create({
    page:{height:"100%",color:"black",flexWrap:"wrap",
      overflow:"hidden",
    },
    names:{width:"100%",backgroundColor:"rgba(61,62,65,255)",height:"15%",alignItems:"center",paddingTop:"20px",
      marginBottom:"10px",
    },
    borders:{borderBottom:"2px solid white",width:"20%",height:"0.1px",backgroundColor:"white",marginTop:"5px",marginBottom:"2px"},
    aside:{width:"30%",height:"80%"},
    info:{width:"65%",height:"80%",paddingLeft:"5px",paddingRight:"5px"},
    genericsDetails:{fontSize:"8px",textAlign:"left",opacity:"0.7",marginTop:"2px",marginBottom:"2px"
      },
  })
  
  
  return <View style={styles.page}>
    <View style={styles.names}>
      <View style={{border:"2px solid white",width:"50%",alignItems:"center",paddingTop:"10px",paddingBottom:"10px"}}>
        <Text style={{color:"white",maxWidth:"95%",maxHeight:"20px",overflow:"hidden"}}>{firstName} {lastName}</Text>
        <View style={styles.borders}></View>
        <Text style={{color:"white",maxWidth:"95%",maxHeight:"20px",overflow:"hidden"}}>{occupation}</Text>
      </View>
    </View>
    <View style={{width:"100%",height:"80%",flexDirection:"row",justifyContent:"space-between",paddingLeft:"4%",paddingRight:"2%"}}>

      <View style={styles.aside}>
        <View>
          <Text style={{textAlign:"left"}}>Details</Text>
          <Text style={styles.genericsDetails}>
            {email}
          </Text>
          <Text style={styles.genericsDetails}>
            {phone}
          </Text>
          <Text style={styles.genericsDetails}>
            {address}
          </Text>
          <View>
            <Text style={{textAlign:"left",marginBottom:"10px",marginTop:"10px"}}>Skills</Text>
            <View style={{width:"100%"}}>
              {skills?.map((item,i)=>{
                 let array=[] 
                 for (let index = 0; index < parseInt(item.rating)/10; index++) {
                   array.push(index)
                }
                return<View key={i} style={{justifyContent:"space-between",flexDirection:"column",marginBottom:"5px",opacity:"0.8"} }>
                  <Text style={{fontSize:web?"9px":"10px",textAlign:"left"}}>{item.skill}</Text> 
                  <View style={{border:"2px solid black",height:"15px",flexDirection:"row",padding:"2px"}}>
                    {array?.map((item,i)=>{
                      return <View key={i} style={{backgroundColor:"black", width:"11%",}}></View>
                    })}
                  </View> 
                
                </View>
              })}
            </View>
            <View>
              <Text style={{textAlign:"left",marginBottom:"10px",marginTop:"10px"}}>Languages</Text>
              <View style={{width:"100%"}}>
                {languages?.map((item,i)=>{
                  return<View key={i} style={{justifyContent:"space-between",marginTop:"5px",marginBottom:"5px" ,flexDirection:"row",opacity:"0.8"}}>
                    <Text style={{fontSize:web?"9px":"10px",width:"45%",textAlign:"left"}}>{item.language}</Text>
                    <Text style={{fontSize:web?"9px":"10px",textAlign:"left"}}>{item.rating}</Text>  
                  </View>
                })}
              </View>
              </View>
          </View>
        </View>
      </View>
      <View style={{borderLeft:"2px solid rgba(61,62,65,255)"}}></View>
      <View style={styles.info}>
        <Text style={{textAlign:"left",marginBottom:"10px"}}>Profile</Text>
        <Text style={{textAlign:"left",fontSize:"8px",opacity:"0.7"}}>{professionalSummary}</Text>
        <View>
        <Text style={{textAlign:"left",paddingBottom:"5px",marginTop:"10px"}}>Employment History</Text>
            {employmentHistory?.map((item,i)=>{
              return <View key={i} style={{flexDirection:"column",marginTop:"10px"}}>
                  <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                    <Text style={{fontSize:web?"8px":"10px"}}>{item.jobTitle}</Text>
                    <Text style={{marginRight:"10px",fontSize:web?"8px":"10px",height:"11px",overflow:"hidden",width:"30%",textAlign:"left"}}>{item.begin}-{item.end}</Text>
                  </View>
                  <Text style={{fontSize:"9px",textAlign:"left",opacity:"0.7",height:"10px",overflow:"hidden"}}>{item.employer}</Text>
                  <Text style={{fontSize:"9px",lineHeight:"1",opacity:"0.7",marginTop:"5px",textAlign:"left"}}>
                    {item.description}
                  </Text>
              </View>
              })}
        </View>
        <View>
        <Text style={{textAlign:"left",paddingBottom:"5px",marginTop:"10px"}}>Education History</Text>
            {educations?.map((item,i)=>{
              return <View key={i} style={{flexDirection:"column",marginTop:"10px"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text  style={{fontSize:web?"8px":"10px",height:"13px",overflow:"hidden",width:"60%",textAlign:"left"}}>{item.school}</Text>
                    <Text style={{marginRight:"10px",fontSize:web?"9px":"10px",height:"11px",overflow:"hidden",width:"30%",textAlign:"left"}}>{item.start}-{item.finish}</Text>
                  </View>
                  <Text style={{fontSize:web?"8px":"10px",textAlign:"left",opacity:"0.7",height:"11px",overflow:"hidden"}}>{item.degree}</Text>
                  <Text style={{fontSize:web?"8px":"10px",lineHeight:"1",opacity:"0.7",marginTop:"5px",textAlign:"left"}}>
                    {item.description}
                  </Text>
              </View>
              })}
        </View>
      </View>
    </View>
  </View>
}
export default Cv4;
