import styled from "styled-components";
import BlockFlexStack from "../../components/shares/block-flex-stack";
import BlockFlex from "../../components/shares/block-flex";

export const MyAccountFormLine = styled(BlockFlexStack)`

   
  
`

export const MyAccountFormLabel = styled(BlockFlex)`

    justify-content: space-between;
`

export const MyAccountFormControl = styled(BlockFlex)`
    
    input[readonly] {
      border: none !important;
      background: red;
    }
    
    input[type='file'] {
      
      background: #64ff00;
    }
  
`

export const MyAccountWarnBlock = styled(BlockFlexStack)`

  justify-content: center;
  align-items: center;
  align-content: center;
  
`
