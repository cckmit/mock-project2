package nts.uk.ctx.basic.app.command.system.bank.branch;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UpdateBranchCommand {
	private String branchId;
	private String bankCode;
	private String branchCode; 
	private String branchName; 
	private String branchKnName; 
	private String memo;	
}
