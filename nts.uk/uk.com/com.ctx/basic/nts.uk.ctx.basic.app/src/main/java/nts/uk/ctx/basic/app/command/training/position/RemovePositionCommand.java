package nts.uk.ctx.basic.app.command.training.position;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class RemovePositionCommand {

	private String positionCode;
}
