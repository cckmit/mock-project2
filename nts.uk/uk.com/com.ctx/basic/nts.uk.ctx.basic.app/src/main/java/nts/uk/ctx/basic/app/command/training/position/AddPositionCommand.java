package nts.uk.ctx.basic.app.command.training.position;

import lombok.Data;
import lombok.NoArgsConstructor;
import nts.uk.ctx.basic.app.command.system.bank.AddBankCommand;

@NoArgsConstructor
@Data
public class AddPositionCommand {

	private String positionCode;
	private String positionName;
}
